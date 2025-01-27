import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Album_Image = () => {
  let parms = useParams();
  let name = parms.name;

  let Find_Image = async () => {
    try {
      // let res = await axios.get(`/api/image/${name}`)
    } catch (error) {
      console.log(error);
      Swal.fire(() => {
        icon: 'error';
        title: 'Oops...';
        text: error.message;
      });
    }
  };

  Find_Image();

  return (
    <div>
      Album_Image <h1>{name}</h1>
    </div>
  );
};

export default Album_Image;
