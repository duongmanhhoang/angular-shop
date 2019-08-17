import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {PostsComponent} from './posts/posts.component';
import {ClientPostDetailComponent} from './posts/client-post-detail/client-post-detail.component';
import {ClientCategoriesComponent} from './categories/client-categories/client-categories.component';
import {ClientDetailClassComponent} from "./categories/client-detail-class/client-detail-class.component";
import {AdminListPostsComponent} from './posts/admin-list-posts/admin-list-posts.component';
import { AdminAddPostComponent } from './posts/admin-add-post/admin-add-post.component';
import { AdminEditPostComponent } from './posts/admin-edit-post/admin-edit-post.component';
import { AdminCategoriesListComponent } from './categories/admin-categories-list/admin-categories-list.component';
import { AdminAddCategoryComponent } from './categories/admin-add-category/admin-add-category.component';
import { AdminEditCategoryComponent } from './categories/admin-edit-category/admin-edit-category.component';
import { AdminListClassComponent } from './classes/admin-list-class/admin-list-class.component';
import { AdminAddClassComponent } from './classes/admin-add-class/admin-add-class.component';
import { AdminEditClassComponent } from './classes/admin-edit-class/admin-edit-class.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        NotfoundComponent,
        PostsComponent,
        ClientPostDetailComponent,
        ClientCategoriesComponent,
        ClientDetailClassComponent,
        AdminListPostsComponent,
        AdminAddPostComponent,
        AdminEditPostComponent,
        AdminCategoriesListComponent,
        AdminAddCategoryComponent,
        AdminEditCategoryComponent,
        AdminListClassComponent,
        AdminAddClassComponent,
        AdminEditClassComponent,
        ContactComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
