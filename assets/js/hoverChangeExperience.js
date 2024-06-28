// export function hoverChangeExperience(
//   nameCard,
//   changeDescription,
//   titleExperience,
//   companyExperience,
//   dateExperience
// ) {
//   const varChangeDescription = document.querySelector(".changeExperience");
//   const varTitleExperience = document.querySelector(".titleExperience");
//   const varCompanyExperience = document.querySelector(".companyExperience");
//   const varDateExperience = document.querySelector(".dateExperience");

//   document.querySelector(nameCard).addEventListener("click", () => {
//     varChangeDescription.innerHTML = changeDescription;
//     varCompanyExperience.innerHTML = companyExperience;
//     varTitleExperience.innerHTML = titleExperience;
//     varDateExperience.innerHTML = dateExperience;
//   });
// }

// const header = document.getElementById("experience-company");
// const btns = header.getElementsByClassName("company");

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     const current = document.getElementsByClassName("activeExperience");
//     current[0].className = current[0].className.replace(
//       " activeExperience",
//       ""
//     );
//     this.className += " activeExperience";
//   });
// }


document.addEventListener("DOMContentLoaded", function() {
  // Inicializar os detalhes da primeira experiência
  function setExperienceDetails(title, company, date, description) {
    document.querySelector(".titleExperience").innerHTML = title;
    document.querySelector(".companyExperience").innerHTML = company;
    document.querySelector(".dateExperience").innerHTML = date;
    document.querySelector(".changeExperience").innerHTML = description;
  }

  setExperienceDetails(
    "Estágio - Back-end",
    "Academia Militar das Agulhas Negras",
    "Mar 2022 - Nov 2022 (9 meses)",
    `Durante meu estágio no setor de desenvolvimento, 
    aprendi sobre o dia a dia de um programador, 
    as demandas de uma instituição e o funcionamento de sistemas web de grande porte. 
    Com esses conhecimentos, 
    desenvolvi um sistema de controle de entrada e saída de visitantes, 
    utilizando PHP, JavaScript, DataTables e Bootstrap. 
    Este projeto me permitiu aplicar minhas habilidades técnicas de forma prática e eficiente.`
  );

  // Adicionar ouvinte de evento para as empresas
  const header = document.getElementById("experience-company");
  const btns = header.getElementsByClassName("company");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      const current = document.getElementsByClassName("activeExperience");
      if (current.length > 0) {
        current[0].classList.remove("activeExperience");
      }
      this.classList.add("activeExperience");

      // Atualizar detalhes da experiência conforme necessário
      if (this.id === "company-AMAN") {
        setExperienceDetails(
          "Estágio - Back-end",
          "Academia Militar das Agulhas Negras",
          "Mar 2022 - Nov 2022 (9 meses)",
          `Durante meu estágio no setor de desenvolvimento, 
          aprendi sobre o dia a dia de um programador, 
          as demandas de uma instituição e o funcionamento de sistemas web de grande porte. 
          Com esses conhecimentos, 
          desenvolvi um sistema de controle de entrada e saída de visitantes, 
          utilizando PHP, JavaScript, DataTables e Bootstrap. 
          Este projeto me permitiu aplicar minhas habilidades técnicas de forma prática e eficiente.`
        );}
      else if (this.id === "company-procurando") {
        setExperienceDetails(
          "Procurando...",
          "novas oportunidades",
          "",
          `Estou em busca de novas oportunidades de emprego na área de back-end, focado em análise de dados e desenvolvimento de sistemas. Como profissional júnior, estou ansioso para aplicar e expandir meus conhecimentos em um ambiente dinâmico e colaborativo.`
        );
    //   } else if (this.id === "company-mais-uma-empresa") {
    //     setExperienceDetails(
    //       "Analista de Dados",
    //       "Mais uma Empresa",
    //       "Fev 2020 - Dez 2020 (11 meses)",
    //       `Em Mais uma Empresa,.`
    //     );
    //   } else if (this.id === "company-empresa-xpto") {
    //     setExperienceDetails(
    //       "Gerente de Projetos",
    //       "Empresa XPTO",
    //       "Mar 2019 - Jan 2020 (10 meses)",
    //       `Na Empresa XPTO.`
    //     );
    //   } else if (this.id === "company-empresa-abc") {
    //     setExperienceDetails(
    //       "Engenheiro de Software",
    //       "Empresa ABC",
    //       "Jan 2018 - Fev 2019 (14 meses)",
    //       `Trabalhei na Empresa ABC`
    //     );
    //   } else if (this.id === "company-empresa-def") {
    //     setExperienceDetails(
    //       "Administrador de Redes",
    //       "Empresa DEF",
    //       "Jul 2017 - Dez 2017 (6 meses)",
    //       `Na Empresa DEF, `
    //     );
      }
    });
  }
});
