/* eslint-disable max-len */
export interface SectionItem {
  tag: string
  text: string
}

export interface Section {
  variable: string
  content?: string
  items?: SectionItem[]
}

export interface AboutMeConfig {
  header: string
  sections: Section[]
}

export const aboutMeConfig: AboutMeConfig = {
  header: 'About Me',
  sections: [
    {
      variable: '[Me]: ',
      content:
        'Desenvolvedor full stack com mais de 2 anos de experiência em desenvolvimento de software, ' +
        '3 anos de experiência em design e 7 anos de experiência no setor financeiro. Gosto de praticar ' +
        'esportes, levar um estilo de vida pacífico e saudável. Apaixonado por crescimento contínuo, ' +
        'busco ser uma pessoa melhor a cada dia e me cercar de pessoas boas e talentosas que também ' +
        'buscam tornar o mundo ao seu redor um lugar melhor.',
    },
    {
      variable: '[Education]: ',
      items: [
        {
          tag: 'Análise e Desenvolvimento de Sistemas: ',
          text: 'Faculdade Descomplica | Florianópolis - SC, BR | 06/2022 - Presente',
        },
        {
          tag: 'Economia (descontinuado): ',
          text: 'Unisinos | São Leopoldo - RS, BR | 01/2018 - 12/2020',
        },
        {
          tag: 'Arquitetura e Urbanismo (descontinuado): ',
          text: 'Feevale | Novo Hamburgo - RS, BR | 02/2013 - 06/2017',
        },
      ],
    },
    {
      variable: '[Courses]: ',
      items: [
        {
          tag: 'Full-Stack Rocketseat: ',
          text: 'JavaScript, TypeScript, Node, React, React Native, Java, SpringBoot | 06/2022 - Presente',
        },
        {
          tag: 'English C1: ',
          text: 'Erin School | Dublin - Ireland | 01/2019 - 07/2019',
        },
      ],
    },
    {
      variable: '[Hobbies]: ',
      items: [
        { tag: '🎨', text: ' Criar artes digitais' },
        { tag: '✏️', text: ' Desenho a mão' },
        { tag: '⚽', text: ' Jogar futebol, futevôlei ou ir pra praia jogar altinha' },
        { tag: '🏖️', text: ' Ir pra praia ou sair com amigos' },
        { tag: '🌳', text: ' Correr na natureza' },
        { tag: '🏋️', text: ' Academia' },
        { tag: '📚', text: ' Aprender coisas novas' },
        { tag: '💻', text: ' Estudar programação e novas tecnologias' },
        { tag: '📺', text: ' Ver séries e documentários' },
        { tag: '📖', text: ' Ler' },
      ],
    },
  ],
}
