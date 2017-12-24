import * as React from 'react';
import Welcome from './Welcome';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Page from './Page';
import NumberList from './NumberList';
import Blog from './Blog';
import NameForm from './NameForm';
import TextAreaForm from './TextAreaForm';
import SelectTagForm from './SelectTagForm';
import MultipleInputHandling from './MultipleInputHandling';
import LiftingStateUp from './LiftingStateUp';
import SignupDialog from './Composition';

class App extends React.Component {
    render() {
        const posts = [
            { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
            { id: 2, title: 'Installation', content: 'You can install React from npm.' }
        ];

        return (
            <div>
                <Welcome name="Sara" />
                <Clock />
                <Toggle />
                <LoginControl />
                <Page />
                <NumberList numbers={[1, 2, 3, 4, 5]} />
                <Blog posts={posts} />
                <NameForm />
                <TextAreaForm />
                <SelectTagForm />
                <MultipleInputHandling />
                <LiftingStateUp />
                <hr />
                <SignupDialog />
            </div>
        );
    }
}

export default App;