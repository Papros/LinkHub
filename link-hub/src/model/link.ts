
class Link {

    Title: string;
    Url: string;
    Color1: string; // background color
    Color2: string; // detail 1 color
    Color3: string; // detail 2 color

    constructor(title:string, url:string, col1:string, col2:string, col3: string){
        this.Title = title;
        this.Url = url;
        
        this.Color1 = checkcolor(col1);
        this.Color2 = checkcolor(col2);
        this.Color3 = checkcolor(col3);
    }

};

const defaultColor:string = "#ffffff";

function checkcolor(col:string):string {

    // cheracters allowed in hex color string
    const allowedChar:string = "0123456789ABCDEFabcdef";

    // allowed length from short (4) #fff to long (7) #ffffff
    if(col.length < 4 || col.length > 7) return defaultColor;

    //first char should be #
    if(col.charAt(0) != '#') return defaultColor;

    //checking each char
    for(var charIndex = 1; charIndex< col.length; charIndex++){
        if(!allowedChar.includes( col.charAt(charIndex) )){
            return defaultColor;
        }
    }

    //If correct, return checked color
    return col;
};