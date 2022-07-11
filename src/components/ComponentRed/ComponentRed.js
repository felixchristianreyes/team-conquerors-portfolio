import React,{Component} from 'react';

import styles from './ComponentRed.css';
export class ComponentRed extends Component{
    render(){
        return(
            <div className='componentRed'>
                <div class="container headerR">
                    <span class="portfolioText">Portfolio</span>
                    <button type="button" class="btn">All projects</button>
                    <button type="button" class="btn">Brand</button>
                    <button type="button" class="btn">Webdesign</button>
                    <button type="button" class="btn">Social Media</button>
                </div>
                <div class="container contentR1">
                    <div class="container contentR1Main border-bottom border-black">

                    </div>
                    <button type="button" class="btn btn-outline-0">
                        View more
                    </button>
                </div>
                <div class="container contentR2 border-top border-black">
                    <div class="container">
                        <div class="row">
                            <div class="col-6 align-items-start">
                                <span class="contentText mb-4">Our</span><span class="contentText2 mb-4">Team</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra ex 
                                    quis ante efficitur, non dictum massa egestas. Donec pulvinar arcu a ligula aliquet, 
                                    sed tristique sem sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                                    <br>
                                    Phasellus sed orci ultrices, viverra elit in, luctus nunc. Suspendisse placerat felis id ex hendrerit laoreet. 
                                    Nulla facilisi. Proin ut dui quam. Cras ultricies mollis nunc. Proin varius ante blandit ligula elementum, id varius 
                                    libero aliquam. Maecenas at accumsan turpis, eget egestas nulla</p>
                            </div>
                            <div class="col-6">
                                <img src="team_img.jpg">
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}