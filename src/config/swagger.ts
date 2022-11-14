import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
export function setSwaggerDocumentConfig(app: any) {
  const config = new DocumentBuilder()
    .setTitle('API MOCKER SWAGGER')
    .setDescription('api mocker 接口文档')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
}