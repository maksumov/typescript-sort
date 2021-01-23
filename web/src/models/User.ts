import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public events: Eventing = new Eventing();
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get get() {
    // return this.attributes.get.bind(this.attributes);
    return this.attributes.get;
  }

  get on() {
    // return this.events.on.bind(this.events);
    return this.events.on;
  }

  get trigger() {
    // return this.events.trigger.bind(this.events);
    return this.events.trigger;
  }
}
