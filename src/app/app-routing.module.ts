import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {PostsComponent} from "./posts/posts.component";
import {ClientPostDetailComponent} from "./posts/client-post-detail/client-post-detail.component";
import {ClientCategoriesComponent} from "./categories/client-categories/client-categories.component";
import {ClientDetailClassComponent} from "./categories/client-detail-class/client-detail-class.component";
import {AdminListPostsComponent} from "./posts/admin-list-posts/admin-list-posts.component";
import {AdminCategoriesListComponent} from "./categories/admin-categories-list/admin-categories-list.component";
import {AdminListClassComponent} from "./classes/admin-list-class/admin-list-class.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {
        path: 'posts', children: [
            {
                path: 'list',
                component: PostsComponent
            },
            {
                path: ':id',
                component: ClientPostDetailComponent
            }
        ]
    },
    {
        path: 'categories', children: [
            {
                path: ':id/classes',
                component: ClientCategoriesComponent
            },
            {
                path: ':category_id/classes/:class_id',
                component: ClientDetailClassComponent
            },
        ]
    },
    {
        path: 'manage',
        children: [
            {
                path: 'posts',
                children: [
                    {
                        path: 'list',
                        component: AdminListPostsComponent,
                    }
                ]
            },
            {
                path: 'categories',
                children: [
                    {
                        path: 'list',
                        component: AdminCategoriesListComponent,
                    }
                ]
            },
            {
                path: 'classes/list',
                component: AdminListClassComponent
            }
        ]
    },
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', component: NotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
