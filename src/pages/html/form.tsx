import * as React from 'react';
import { TopicPage } from '../../components/templates/TopicPage';

const FormPage: React.FC = () => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name,
          phone,
          email,
        }),
      });

      const data = await response.json();
      console.log(data);
      return data;
    },
    [name, phone, email]
  );

  return (
    <TopicPage heading='Learning Form'>
      <form onSubmit={handleSubmit} action=''>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone: </label>
          <input
            type='tel'
            id='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button>Submit</button>
      </form>
    </TopicPage>
  );
};

export default FormPage;
