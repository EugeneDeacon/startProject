import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Add global prefix to all routes
  app.setGlobalPrefix('api');
  // Add open api to all routes
  const config = new DocumentBuilder()
    .setTitle('Start Project')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);
  // Lissten to port
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
