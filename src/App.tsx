import {
  Bell,
  CaretRight,
  Key,
  UserCircle,
  Person,
  DesktopTower,
  UserSwitch,
  Question,
  SignOut,
} from "phosphor-react";
import * as Styled from "./styles";

export default function App() {
  return (
    <Styled.Container>
      <Styled.ProfileSettings>
        <Styled.Row>
          <Styled.Header>
            <Styled.ProfilePicture
              src="https://github.com/RuanDevJs.png"
              alt="Profile Picture"
              title="Profile Picture"
            />
            <Styled.Info>
              <h1>Ruan Vitor</h1>
              <p>ruanvelpidio@hotmail.com</p>
            </Styled.Info>
          </Styled.Header>
        </Styled.Row>
        <Styled.Row>
          <Styled.Title>
            <h1>Conta</h1>
          </Styled.Title>
          <Styled.Setting>
            <Styled.Link>
              <UserCircle size={18} /> Dados pessoais
            </Styled.Link>
            <CaretRight size={18} />
          </Styled.Setting>
          <Styled.Setting>
            <Styled.Link>
              <Key size={18} /> Informações de login
            </Styled.Link>
            <CaretRight size={18} />
          </Styled.Setting>
        </Styled.Row>
        <Styled.Row>
          <Styled.Title>
            <h1>Preferências</h1>
          </Styled.Title>
          <Styled.Setting>
            <Styled.Link>
              <Bell size={18} /> Notificações
            </Styled.Link>
            <CaretRight size={18} />
          </Styled.Setting>
          <Styled.Setting>
            <Styled.Link>
              <Person size={18} /> Acessibilidade
            </Styled.Link>
            <CaretRight size={18} />
          </Styled.Setting>
        </Styled.Row>
        <Styled.Row>
          <Styled.Title>
            <h1>privacidade</h1>
          </Styled.Title>
          <Styled.Setting>
            <Styled.Link>
              <DesktopTower size={18} /> Aparelhos conectados
            </Styled.Link>
            <CaretRight size={18} />
          </Styled.Setting>
          <Styled.Setting>
            <Styled.Link>
              <UserSwitch size={18} /> Contas vinculadas
            </Styled.Link>
            <CaretRight size={18} />
          </Styled.Setting>
        </Styled.Row>
        <Styled.Footer>
          <Styled.Setting>
            <Styled.Link>
              <Question size={18} /> Central de Ajuda
            </Styled.Link>
            <CaretRight size={18} />
          </Styled.Setting>
          <Styled.Setting>
            <Styled.Link>
              <SignOut size={18} /> Sair
            </Styled.Link>
          </Styled.Setting>
        </Styled.Footer>
      </Styled.ProfileSettings>
    </Styled.Container>
  );
}
