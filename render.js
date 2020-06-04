function render(template, dataArr){
    let h=''
    let r = /\[(.*)\]/g;
    let propertiesInTemplate = template.match(r)
    
    for (let i = 0; i < propertiesInTemplate.length; i++) {
         propertiesInTemplate[i] = propertiesInTemplate[i].replace('[', '').replace(']', '')
    }
    console.log(propertiesInTemplate);
    
   
    dataArr.forEach(item => {
        let itemHtml = template
        propertiesInTemplate.forEach(p => {
            
            let propValue = item[p]
            itemHtml = itemHtml.replace(`[${p}]`, propValue)
        })
        h += itemHtml
    });
    return h
}

