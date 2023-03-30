import React from "react";

const CardInfo = ({ card }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
  <h1 class="text-center text-3xl font-bold text-black mb-5">{card.name}</h1>
<div class="flex items-center justify-between mb-6">
  <img class="h-auto max-w-full mx-auto w-64" src={card.card_images[0].image_url} alt={card.name} />
</div>

<table className="w-full table-fixed">
  <tbody>
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="font-bold py-2 w-1/4">Tipo:</td>
      <td className="py-2">{card.type}</td>
    </tr>
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="font-bold py-2">Descripción:</td>
      <td className="py-2">{card.desc}</td>
    </tr>
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="font-bold py-2">Atributo:</td>
      <td className="py-2">{card.attribute}</td>
    </tr>
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="font-bold py-2">Nivel:</td>
      <td className="py-2">{card.level}</td>
    </tr>
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="font-bold py-2">Ataque:</td>
      <td className="py-2">{card.atk}</td>
    </tr>
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="font-bold py-2">Defensa:</td>
      <td className="py-2">{card.def}</td>
    </tr>
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="font-bold py-2">Arquetipo:</td>
      <td className="py-2">{card.archetype}N/A</td>
    </tr>
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="font-bold py-2">Tipo de Cuadro:</td>
      <td className="py-2">{card.frameType}</td>
    </tr>
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="font-bold py-2">Raza:</td>
      <td className="py-2">{card.race}</td>
    </tr>
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="font-bold py-2">Juego de Cartas:</td>
      <td className="py-2">{card.card_sets[0].set_name}</td>
    </tr>
    <tr className="hover:bg-gray-100">
      <td className="font-bold py-2">Precio:</td>
      <td className="py-2">{card.card_prices[0].tcgplayer_price}</td>
    </tr>
  </tbody>
</table>

    </div>
  );
};

export default CardInfo;
