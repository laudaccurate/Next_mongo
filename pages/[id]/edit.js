import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
const axios = require("axios").default;
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useState } from "react";

function EditHero({ heros }) {
  const router = useRouter();
  const heroId = router.query.id;

  const [form, setForm] = useState({
    superHero: heros.superHero,
    realName: heros.realName,
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
      const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
        method: "PUT",
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
      <h1 className="display-4 my-4">Edit hero identity</h1>
      <form onSubmit={handleForm}>
        <MDBInput
          onChange={handleChange}
          label="SuperHero"
          type="text"
          name="superHero"
          value={form.superHero}
          className="my-4"
        />
        <MDBInput
          className="my-4"
          onChange={handleChange}
          label="Hero Name"
          type="text"
          name="realName"
          value={form.realName}
        />
        <MDBBtn type="submit">Edit a hero</MDBBtn>
      </form>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await axios(`http://localhost:3000/api/hero/${id}`);
  // console.log(res.data.hero);
  const { hero } = res.data;
  console.log(hero);
  return {
    props: { heros: hero },
  };
}

export default EditHero;
