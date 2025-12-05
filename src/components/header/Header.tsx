
import { Button } from '../button/Button';
import './header.css';

type User = {
  name: string;
};


export interface HeaderProps {
  user?: User;
  title: string;
}

export const Header = ({ user, title = "" }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>

        <h1>Study Buddy</h1>
      </div>
      <div><h4>{title}</h4></div>
      <div>
        {user ? (
          <>
            <h3 className="welcome">
              Welcome, <b>{user.name}</b>!
            </h3>
          </>
        ) : (
          <>
            <Button label={user ? "log" : "Log in"} />
          </>
        )}
      </div>
    </div>
  </header>
);
