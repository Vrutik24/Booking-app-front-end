import React from "react";
import "./propertyList.css";

export const PropertList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          className="pListImage"
          src="https://th.bing.com/th/id/R.fa66cb634750951cfc8cefaabc8e8e0b?rik=xVyXfjpycD2SOQ&riu=http%3a%2f%2fwww.holidayhypermarket.co.uk%2fwp-content%2fuploads%2f2019%2f05%2fACC_013623_MAJ_28_Protur_Bonamar_Hotel.jpg&ehk=hVlXuMb4Q4aLyVjdVo2v%2fZnGSoUOfuLhH2Psn17l4F0%3d&risl=&pid=ImgRaw&r=0"
          alt="Hotels"
        />
        <div className="pListItemDesc">
          <h1>Hotels</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          className="pListImage"
          src="https://th.bing.com/th/id/OIP.JxamdbGUn2Vjwk93YPqJzQHaEK?pid=ImgDet&rs=1"
          alt="Apartments"
        />
        <div className="pListItemDesc">
          <h1>Apartments</h1>
          <h2>1000 Apartments</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          className="pListImage"
          src="https://th.bing.com/th/id/R.4d9302647d2e3de67a1f937470cf89e9?rik=ERJK8P%2fC8QX8Vw&riu=http%3a%2f%2fwww.gentlemansgazette.com%2fwp-content%2fuploads%2f2014%2f11%2fRoyalton-Cayo-Santa-Maria.jpg&ehk=1euu39WoP3H%2f8JshtZZa0fcC6%2fdSJafn%2fH0W%2fkBISTk%3d&risl=&pid=ImgRaw&r=0"
          alt="Resorts"
        />
        <div className="pListItemDesc">
          <h1>Resorts</h1>
          <h2>150 Resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          className="pListImage"
          src="https://th.bing.com/th/id/R.b0b624aebb190412766c81a74e600214?rik=mrV9SL3J9YCMAQ&riu=http%3a%2f%2fwww.holidayhometimes.com%2fwp-content%2fuploads%2f2013%2f02%2ffeb643b6-a55d-41ab-89c3-1350e3dacd27.jpg&ehk=NZT4cgRE8cRNu40xlDI4x8ac9PMogW4vdKstYDALrlc%3d&risl=&pid=ImgRaw&r=0"
          alt="Villas"
        />
        <div className="pListItemDesc">
          <h1>Villas</h1>
          <h2>100 Villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          className="pListImage"
          src="https://th.bing.com/th/id/OIP.oIbZp6o1bKJmuZqC8nPDpgHaFe?pid=ImgDet&rs=1"
          alt="Cabins"
        />
        <div className="pListItemDesc">
          <h1>Cabins</h1>
          <h2>500 Cabins</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          className="pListImage"
          src="https://www.valleylodge.com/wp-content/uploads/mana5280-996kRR6UXxo-unsplash-scaled.jpg"
          alt="Cottages"
        />
        <div className="pListItemDesc">
          <h1>Cottages</h1>
          <h2>450 Cottages</h2>
        </div>
      </div>
    </div>
  );
};
