import React from "react";
import { Link } from "react-router-dom";
import InputPandora from "../../components/InputPandora";
import InputPandoraMedio from "../../components/InputPandoraMedio";
import LOGO from "../../assets/LOGO.png";
import { FiMail, FiLock } from "react-icons/fi";

import { Container, CaixaCadastro, CaixaTitulos, Inf, Logo, ImgLogo, ContainerPT2 } from "./styles";

export default function index() {
  return (
    <Container>
      {/* <Inf>
        Devolução grátis em até 25 dias | 40% de desconto em fretes acima de R$
        150,00 | Parcelamento em até 6x no cartão
      </Inf> */}

      <Logo>
        <ImgLogo> <img src={LOGO} alt="pandora" /></ImgLogo>
      </Logo>

      <CaixaCadastro>
        <CaixaTitulos>
          <div>CRIE SUA CONTA PANDORA</div>
          <span>
            tenha acesso a promoções exclusivas, fique por dentro das novidades e acompanhe suas compras.
          </span>
        </CaixaTitulos>
        <InputPandora
          titulo="E-mail"
          placeholder="digite seu e-mail (email@email.dominio)"
        />

        <InputPandora
          titulo="CPF"
          placeholder="999.999.999-99"
        />
        <InputPandora
          titulo="Nome Completo"
          placeholder="digite seu nome completo"
        />
        <ContainerPT2>
          <div>
            <InputPandoraMedio
              titulo="Telefone celular"
              placeholder="(xx) xxxxx-xxxx"
            />

            <InputPandoraMedio
              titulo="Senha"
              placeholder="Digite sua senha"
            />

            <InputPandoraMedio
              titulo="Confirmar senha"
              placeholder="Confirme a senha"
            />
          </div>
        </ContainerPT2>

        <button>CADASTRE-SE</button>
      </CaixaCadastro>
    </Container>
  );
}