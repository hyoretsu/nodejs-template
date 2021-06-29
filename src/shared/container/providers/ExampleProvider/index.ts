import { container } from 'tsyringe';

import ExampleProvider from './implementations/ExampleProvider';
import IExampleProvider from './models/IExampleProvider';

const providers = {
 example: ExampleProvider,
};

container.registerSingleton<IExampleProvider>('ExampleProvider', providers.example);
