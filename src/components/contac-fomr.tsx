'use client';

import { SubmitEvent } from 'react';

import { Button } from './ui/button';
import { Input } from './ui/input';

const ContacForm = () => {
  const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    e.currentTarget.reset();
    console.log(data);
  };

  return (
    <form className="space-y-12" onSubmit={onSubmit}>
      <Input required type="email" name="email" placeholder="Your email" />
      <Input required name="name" placeholder="Your name" />
      <Input
        required
        className="mb-20"
        name="message"
        placeholder="Your message"
      />

      <Button type="submit" className="h-14 w-66">
        Send
      </Button>
    </form>
  );
};

export default ContacForm;
