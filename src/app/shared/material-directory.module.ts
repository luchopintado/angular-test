import { NgModule } from '@angular/core';

import {
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports: [
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
    ],
})
export class MaterialDirectoryModule {}
