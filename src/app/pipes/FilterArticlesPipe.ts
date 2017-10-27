import { Pipe, PipeTransform } from '@angular/core';  
  
@Pipe({  
    name: 'filterarticles',  
    pure: false  
})  
  
export class FilterArticlesPipe implements PipeTransform {  
    transform(items: any[], filter: string): any {  
        if (!items || !filter) {  
            return items;  
        }  
        return items.filter(item => item.title.toLowerCase().indexOf(filter) !== -1 || item.link.toLowerCase().indexOf(filter) !== -1);  
    }  
}  