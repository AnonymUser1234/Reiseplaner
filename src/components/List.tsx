import { useEffect, useState } from 'react'
import '../css/stylesheetList.css'
import { Journey } from '../types'
import { Item } from '../types'
import Entry from './Entry'

type FormProps = {
    data: Journey
}

function List(props: FormProps) {
    const [packlist, setPacklist] = useState<Array<Item>>();

    useEffect(updateList, [props.data]);

    function updateList(){
        let list: Array<Item> = [];
        const data: Journey = props.data;


        if(data.days > 1){
            list.push({name: "Unterhose", anzahl: Math.ceil(data.days*data.hygiene/5)});
            if(data.gender === "female"){
                list.push({name: "BH", anzahl: Math.ceil(data.days*data.hygiene/5)});
            }


            switch(data.type){
                case "sommer": list.push({name: "T-Shirt", anzahl: Math.ceil(data.days*data.hygiene/5)}, {name: "Pullover", anzahl: Math.ceil(data.days*data.hygiene/5/4)}, {name: "kurze Hose", anzahl: Math.ceil(data.days*data.hygiene/5/4)}); break;
                case "winter": list.push({name: "T-Shirt", anzahl: Math.ceil(data.days*data.hygiene/5/3)}, {name: "Pullover", anzahl: Math.ceil(data.days*data.hygiene/5/3)}, {name: "lange Hose", anzahl: Math.ceil(data.days*data.hygiene/5/4)}); break;
                case "zwischen": list.push({name: "T-Shirt", anzahl: Math.ceil(data.days*data.hygiene/5/2)}, {name: "Pullover", anzahl: Math.ceil(data.days*data.hygiene/5/4)}, {name: "kurze Hose", anzahl: Math.ceil(data.days*data.hygiene/5/5)}, {name: "lange Hose", anzahl: Math.ceil(data.days*data.hygiene/5/5)}); break;
            }

            if(data.type === "winter"){
                list.push({name: "Winterjacke", anzahl: 1});
            }else if(data.type === "zwischen"){
                list.push({name: "dünne Jacke", anzahl: 1});
            }

            switch(data.weather){
                case "middle": list.push({name: "Regenjacke"}); break;
                case "bad": list.push({name: "Regenjacke"}, {name: "Regenhose"}); break;
            }

            if(data.hygiene > 3){
                if(data.hygiene >4){
                    list.push({name: "Deo"});
                    if(data.days > 2){
                        list.push({name: "Duschmittel"})
                    }else if(data.hygiene >6){
                        list.push({name: "Duschmittel"});
                    }
                }
                list.push({name: "Zahnbürste & Zahnpasta"});
                
            }

            if(data.hygiene > 4){
                list.push({name: "evt. weitere Hygieneartikel"})
            }
        }
        
        setPacklist(list)
    }

    return (
        <>
            <div id='packlist'>
                {
                 packlist?.map(item => <Entry text={item.anzahl!== undefined?item.anzahl +"x "+item.name:item.name}></Entry>)
                }
            </div>
            

        
        </>
    )
}

export default List