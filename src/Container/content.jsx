import React, { Component } from 'react';
import "./content.css";

 class Content extends Component {
     state = {
         data: [0,1,2,3,4,5]
     }

     componentDidMount() {
         const tanah = document.querySelectorAll('.tanah');
         
         this.munculkanTikus(tanah)
     }
     
     randomTanah = (tanah) => {
        let tanahSebelumnya;

        const TR = Math.floor(Math.random() * tanah.length);
        const tRandom = tanah[TR];
    
        if(tRandom === tanahSebelumnya){
            this.munculkanTikus(tanah)
           } 
        tanahSebelumnya = tRandom;
        
        return tRandom;
     }

     randomWaktu(min, max) {
        return Math.round(Math.random() * (max - min) + min);
     }

     munculkanTikus(tanah) {
        const tRandom = this.randomTanah(tanah);
        const wRandom = this.randomWaktu(300,1000);
        tRandom.classList.add('muncul');

        setTimeout(() => {
            tRandom.classList.remove('muncul');
            this.munculkanTikus(tanah);
        }, wRandom);
     }

    render() {
        const loop = this.state.data.map(res => (
            <div className="tanah" key={res}>
                <div className="tikus"></div>
            </div>
        ));
        return (
            <div>
                <h1>Pukul Tikus Tanah</h1>
                <button>Mulai!</button>
                <h2>0</h2>
                <div className="container">
                    {loop}
                </div>
            </div>
        )
    }
}

export default Content;