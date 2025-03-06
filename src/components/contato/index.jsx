"use client";

import Link from "next/link";
import Button from "../button";
import Styles from "./contato.module.scss";
import Input from "../input/index.jsx";
import Select from "../select";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contato = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      midia: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Campo Obrigatorio"),
      email: Yup.string()
        .email("E-mail inválido")
        .required("Campo Obrigatorio"),
      phone: Yup.string().required("Campo Obrigatorio"),
      website: Yup.string().required("Campo Obrigatorio"),
      midia: Yup.string().required("Campo Obrigatorio"),
    }),

    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (values) => {
    console.log("teste 1:", values)

    emailjs.init("4NpCzVVu9XRNP95mU");

    const parms = {
      email: values.email,
      nome: values.name,
      phone: values.phone,
      website: values.website,
      midia: values.midia
    };

    try {
      const response = await emailjs.send(
        "service_qejo1vr",
        "template_h8xekal",
        parms
      );
      console.log("Email enviado!", response);
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  console.log("teste 2:", formik?.errors);
  console.log("teste 3:", formik?.isValid);
  console.log("teste 4:", formik?.values);

  return (
    <div className={Styles.container}>
      <div className={Styles.texts}>
        <span>ENTRE EM CONTATO</span>
        <h1>Aumente seu resultado de vendas e performance</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
      </div>
      <div className={Styles.form}>
        <h1>Fale com um especialista</h1>
        <form id="formulario" onSubmit={formik.handleSubmit}>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Nome completo"
            required
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} //experimental
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            required
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} //experimental
          />
          <Input
            id="phone"
            name="phone"
            type="text"
            placeholder="Celular/Whatsapp"
            pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
            required
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} //experimental
          />
          <Input
            id="website"
            name="website"
            type="text"
            placeholder="Site"
            required
            value={formik.values.website}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} //experimental
          />
          <Select
            id="midia"
            name="midia"
            placeholder="Orçamento para mídia"
            options={[
              { label: "Instagram", value: "instagram" },
              { label: "Facebook", value: "facebook" },
            ]}
            required
            value={formik.values.midia}
            onChange={formik.handleChange}
          />
          <Button title="Enviar" kind="full" type="submit" />
        </form>
      </div>
      <div className={Styles.footer}>
        <p>
          Ao enviar esse formulário, você reconhece que leu e concorda com a
          nossa
          <Link href="/">
            <span> Política de Privacidade</span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Contato;
