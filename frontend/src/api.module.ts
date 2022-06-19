import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { TicketToolConfiguration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { DefaultService } from './api/default.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class TicketToolApiModule {
    public static forRoot(configurationFactory: () => TicketToolConfiguration): ModuleWithProviders<TicketToolApiModule> {
        return {
            ngModule: TicketToolApiModule,
            providers: [ { provide: TicketToolConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: TicketToolApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('TicketToolApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
