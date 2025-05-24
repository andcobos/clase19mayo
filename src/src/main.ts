import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
 
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, 
      forbidNonWhitelisted: true, 
      transform: true, 
      disableErrorMessages: false, 
    }),
  );

  app.enableCors();

  await app.listen(3000);
  console.log('Aplicación ejecutándose en http://localhost:3000');
  console.log('Endpoints disponibles:');
  console.log('   GET    /productos');
  console.log('   POST   /productos');
  console.log('   GET    /productos/:id');
  console.log('   PATCH  /productos/:id');
  console.log('   DELETE /productos/:id');
}
bootstrap();