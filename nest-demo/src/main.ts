import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './common/http-exception/http-exception.filter';
import { TransformInterceptor } from './common/transform/transform.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module' 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);   // 获取全局配置
  const PORT = configService.get<number>('PORT', 9000);
  const HOST = configService.get('HOST', 'localhost');
  await app.listen(PORT, () => {
    console.log(`服务已经启动,接口请访问:http://wwww.${HOST}:${PORT}`);
  });
  // 设置swaager
  // const options = new DocumentBuilder()
  //   .setTitle('nest-demo example')
  //   .setDescription('The nest demo API description')
  //   .setVersion('1.0')
  //   .build();
  // const document = SwaggerModule.createDocument(app, options);
  // app.useGlobalFilters(new HttpExceptionFilter()); // 全局注册错误的过滤器(错误异常)
  // app.useGlobalInterceptors(new TransformInterceptor()); // 全局注册成功过滤器
  // await app.listen(3001);
}
bootstrap();
