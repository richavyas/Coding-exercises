function DrawGameTable(image, origin, align, content){
    if(width == undefined) var width = true;
    if(height == undefined) var height = true;

    var gameTableSurface = new ImageSurface({
        size : [width, height],
        content: image
    });
    
    var table = new Body();
    
    physicsEngine.addBody(table);
    
    ViewModifier = new Modifier({
        origin: [0.5, 0.5]
    });
    
    view.add(ViewModifier).add(gameTableSurface);
}