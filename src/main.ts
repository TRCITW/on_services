import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const PORT = Number(process.env.PORT ?? 3000)

  const config = new DocumentBuilder()
      .addBearerAuth()
      .setTitle('ON API docs')
      .setDescription('Optimum Nutrition – является дочерней компанией ведущего производителя сыров и продуктов питания Glanbia. Свою продукцию ON выпускает под двумя брендами – Optimum Nutrition и American Body Building – предоставляя потребителю широчайшую линейку добавок различных категорий. У компании существует четыре современных складских и производственных помещения. ON позиционирует себя, как единственную компанию на рынке спортивного питания, которая охватила все возможные категории подобной продукции. Не так важно идет ли речь о питательных батончиках и шоколадках, протеине, готовых к употреблению спортивных миксах или витаминных комплексах, минеральных и растительных добавках, Optimum Nutrition способна обеспечить покупателей любым видом продукции спортивного питания. При поддержке компании Costello’s Health Distributors и американской дистрибьюторской сети ABB Optimum Nutrition создала мощную, быструю и высококачественную распределительную сеть поставок на территории США. Вместе Optimum Nutrition, American Body Build и Costello’s Health Distributors имеют доминирующее значение в индустрии спортивного питания благодаря высокому качеству продуктов, доступных в любых специализированных магазинах, в магазинах здорового питания и в тренажерных залах.')
      .setVersion('0.2.0')
      .addTag('ON')
      .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

bootstrap();
