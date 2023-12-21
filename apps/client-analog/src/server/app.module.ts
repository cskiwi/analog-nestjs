// needs to be first import, it loads the polyfills
import { AngularRendererModule } from '@nitedani/angular-renderer-nestjs';
import { Module } from '@nestjs/common';
import { AppComponent } from '../app/app.component';

@Module({
  imports: [
    AngularRendererModule.forRoot({
      page: AppComponent,
      // import only on server
      imports: [],
      // provide only on server
      providers: [],
    }),
  ],
})
export class AppModule {}
