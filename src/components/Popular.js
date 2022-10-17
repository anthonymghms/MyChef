import * as React from 'react';
import { ChevronRight } from '@mui/icons-material';
import { KeyboardArrowDown } from '@mui/icons-material';

const itemInfo = [
    {name:'Ashrafieh',chefs:'258 chefs'},
    {name:'Hamra',chefs:'182 chefs'},
    {name:'Mar Mikhael',chefs:'124 chefs'},
    {name:'Gemmayze',chefs:'62 chefs'},
    {name:'Dbayeh',chefs:'103 chefs'},
    {name:'Sin EL Fil',chefs:'69 chefs'},
    {name:'Zalka',chefs:'51 chefs'},
    {name:'Downtown',chefs:'74 chefs'},
]

class Popular extends React.Component{

    renderTitle(){
        return(
            <div className='popular-title-container' style={{color:'white'}}>
                <h2 className='popular-title'>Popular locations in and around <strong>Beirut</strong> </h2>
            </div>
        )

    }

    renderGridItem(item,key){
        return(
            <div className='item-container' key={key}>
                <a href='#any' className='item-tag'>
                    <div className='item-content'>
                        <div className='item-title-box'>
                            <h5 className='item-title'>
                                {item.name}
                            </h5>
                            <p className='item-desc'>
                                {item.chefs}
                            </p>
                        </div>
                        <i>
                            <ChevronRight/>
                        </i>
                    </div>
                </a>
            </div>

        )
    }

    renderAllItems(){
        return itemInfo.map((item,key) => this.renderGridItem(item,key))
    }

    renderGrid(){
        return (
            <div className='grid-container'>
                {this.renderAllItems()}
                <div className='collapse-item-container'>
                    <div className='collapse-box'>
                        <div className='collapse-title'>see more</div>
                        <i><KeyboardArrowDown/></i>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return (
            <div  style={{backgroundColor:'red'}}>
                <div className='popular-container'>
                {this.renderTitle()}
                {this.renderGrid()}
                </div>
            </div>

        )
    }
}


export default Popular;