//
//The current events available to this site include
type moment= "obituary"|"concert"|"wedding"|"launch";
//
//The social media platforms we are to work on are 
type media ="facebook"|"messages"|"whatap"|"twitter"|"instagram"
//
//This is the location where an event took place has 
//atleast three compulsory sections county, district and
//town for a more comprehisive location the vilage, subcounty 
//district and the country 
//Cases where they are not known the name of the closest towns 
//name can be repeated
interface loc{
    country?:string;
    county:string;
    sub_county?:string;
    district:string;
    town:string;
    village?:string;
}
//
//node is the super class that allows all its child classes with the ability 
//to query the database using node js 
class node{
    //
    //
    constructor(){
    }
    //
    //This function provides a platform for quering the database.
    
    query(){
        //
        var mysql = require('mysql');
        //
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "kumbukumbu"
        });
        //
        con.connect(function(err) {
        if (err) throw err;
        //Select all customers and return the result object:
        con.query("SELECT * FROM customers", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
        });
    }
}
//
//The when the event took place is charactarised by the start_date, end_date,
//or the duration of time it took place 
//The optional end date shows the event took place for a single day
interface when{
    date:Date
    from:TimeRanges
    end_date?:Date
}
//
//Models a memorable occurence or something worth rembering.
//With the basic common notion of what, when, where, why, any
//memrable short description for the occasion and an array of 
//picture taken to show the world. 
class get_together{
    //
    //The occasion signifies the what. What is to be remembered 
    public occasion:moment;
    //
    //The where shows the location of occasion went down 
    public location:loc;
    //
    //The short description of this memory optional as some memories
    //can be self explanatory or derived from better explained in the pictures 
    //and videos taken
    public description?:string;
    //
    //When the event took place is as important as the event 
    public When:when;
    //
    //an array of pictures and videos taken to capture the moment 
    public pictures?:Array<string>
    //
    //To create a kumbukumbu memory we must atleast have a name of 
    //the occasion, the location where it happened and the time when
    //it happened 
    constructor(name:moment,location:loc,When:when,why?:describe){
        //
        //Saving the mandatory prperties as described above
        this.When=When;
        this.location=location;
        this.occasion=name;
        this.description=why;
    }
    //
    //Loads all the obituaries from the database displaying them as a 
    //simple kumukumbu 
    get_obituaries():Array<obituary>{
        
    }
    //
    //Retrieves all the other occasion
    get_occasions():Array<occasion>{

    }
    //
    //Allows any viewer of our page to share the content via social media platforms 
    share(s_media:media):void{
        //
        //By monday we are to have working samples in the following order
        //kimotho: msg,instagram,
        //lawrence: facebook,whatap,twitter,
    }

}
//
//Type describe is a descriptive type for a string of atmost 100 
//characters. Research on how to limit its length to 100 characters
type describe=string;
//
//The major memory saved in this kumbukumbu platform is the obituary
//this class extents a kumbukumbu with the eulogy and the bereaved family
class obituary extends get_together{
    //
    //The name of the deseased person 
    public name:string
    //
    //A short description of the diseased in about 100 words 
    public description:describe;
    //
    //
    constructor(name:moment,location:loc,When:when,why?:describe){
        super(name,location,When,why);
    }
}
//
//This is the short story of the deseased. Has the various sections each of type 
//describe not exceeding words.
class eulogy{
    //
    public birth?:describe;
    public education?:describe;
    public sickness?:describe;
    public employment?:describe
    //
    constructor(birth?:describe,education?:describe,sickness?:describe,employment?:describe){
        this.birth=birth
        this.education=education;
        this.employment=employment;
        this.sickness=sickness;
    }

}
//
//
class occasion extends get_together{
    //
    //
    constructor(name:moment,location:loc,When:when,why?:describe){
        super(name,location,When,why);
    }

}
//
//