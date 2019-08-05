import { NgModule } from '@angular/core';

import {
    MatListModule,
    MatToolbarModule,
    MatIconModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatListModule,
        MatToolbarModule,
        MatIconModule,
    ],
    exports: [
        MatListModule,
        MatToolbarModule,
        MatIconModule,
    ],
})
export class MaterialDirectoryModule {}
