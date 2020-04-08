import React, { Component } from "react";
import "./content.css";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            data: [0, 1, 2, 3, 4, 5],
            selesai : false,
            skor: 0,
            status: false
        };
    }

  mulai = () => {
    const tanah = document.querySelectorAll(".tanah");
    const tikus = document.querySelectorAll(".tikus");
    this.setState({
        selesai : false,
        skor: 0,
        status : true
    }, () => this.munculkanTikus(tanah) )
    setTimeout(() => {
        this.setState({
            selesai: true,
            status: false
        })
    }, 10000);
    this.getTikus(tikus)
  };

  randomTanah = tanah => {
    let tanahSebelumnya;

    const TR = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[TR];

    if (tRandom === tanahSebelumnya) {
      this.munculkanTikus(tanah);
    }
    tanahSebelumnya = tRandom;

    return tRandom;
  };

  randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  munculkanTikus(tanah) {
    const tRandom = this.randomTanah(tanah);
    const wRandom = this.randomWaktu(300, 1000);
    tRandom.classList.add("muncul");

    setTimeout(() => {
      tRandom.classList.remove("muncul");
      
      if(!this.state.selesai){
          this.munculkanTikus(tanah);
      };
    }, wRandom);
  }

  pukul() {
    this.parentNode.classList.remove('muncul')
  }

  skor =() => {
      this.setState({
          skor: this.state.skor + 1
      })
  }
  getTikus = (tikus) => {
    tikus.forEach(t => {
      t.addEventListener('click', this.pukul)
      t.addEventListener("click" , this.skor)
    });
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
        <button disabled={this.state.status} onClick={this.mulai } className={this.state.status ? "btn-mulai" : null} >Mulai!</button>
        <h2>{this.state.skor}</h2>
        <div className="container">{loop}</div>
      </div>
    );
  }
}

export default Content;
