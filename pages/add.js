import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
const axios = require("axios").default;
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useState } from "react";

function addNewHero() {
  const [form, setForm] = useState({
    superHero: "",
    realName: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios("http://localhost:3000/api/hero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container col-8">
      <h1 className="display-4 my-4">Add a new hero identity</h1>
      <form onSubmit={handleForm}>
        <MDBInput
          className="my-4"
          onChange={handleChange}
          label="SuperHero"
          type="text"
          name="superHero"
        />
        <MDBInput
          className="my-4"
          onChange={handleChange}
          label="Hero Name"
          type="text"
          name="realName"
        />
        <MDBBtn type="submit">Add new hero</MDBBtn>
      </form>
    </div>
  );
}

export default addNewHero;
