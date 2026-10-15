import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 2rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }

    .project-media{
      display: block;
      margin-bottom: 2rem;
      border-radius: 0.8rem;
      overflow: hidden;
      box-shadow: 0 0.4rem 1.6rem rgba(0,0,0,0.3);
      img{
        display: block;
        width: 100%;
        aspect-ratio: 2 / 1;
        object-fit: cover;
        object-position: top center;
      }
    }

    .featured-slot{
      grid-column: 1 / -1;
    }

    .project.featured{
      display: grid;
      grid-template-columns: 1.05fr 1fr;
      gap: 3.2rem;
      align-items: center;

      .featured-media{
        display: block;
        border-radius: 0.8rem;
        overflow: hidden;
        box-shadow: 0 0.4rem 2rem rgba(0,0,0,0.35);
        img{
          display: block;
          width: 100%;
          height: auto;
        }
      }

      .featured-media{
        min-width: 0;
      }

      .featured-content{
        display: flex;
        flex-direction: column;
        height: 100%;
        min-width: 0;
      }

      footer .tech-list{
        flex-wrap: wrap;
        gap: 0.6rem 2rem;
      }

      header{
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .status{
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
      }

      .badge{
        display: inline-flex;
        align-items: center;
        gap: 0.7rem;
        padding: 0.4rem 1.2rem;
        border-radius: 99rem;
        background-color: rgba(255,255,255,0.12);
        color: #FFF;
        font-size: 1.3rem;
        font-weight: 700;
        .dot{
          width: 0.9rem;
          height: 0.9rem;
          border-radius: 50%;
          background-color: var(--green);
        }
      }

      p.note{
        opacity: 0.85;
        border-inline-start: 3px solid var(--green);
        padding-inline-start: 1.2rem;
      }
    }
  }

  @media (max-width: 960px){
    margin-top: 8rem;
    .projects{
      grid-template-columns: 1fr 1fr;
      .project.featured{
        grid-template-columns: 1fr;
        gap: 2.4rem;
      }
    }
  }

  @media (max-width: 740px){
    margin-top: 8rem;
    .projects{
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px){
    padding: 0 1.5rem;
    h2{
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }
`