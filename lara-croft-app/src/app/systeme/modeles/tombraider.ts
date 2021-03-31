export interface TombRaider {
    _id?:number | string;
    nom: string;
    description?: string;
    img:string;
    statu:string;
    taille?:string | number;
    specialites?:Array<string | number>;
    sexe?:string[];
    
}
