import { createServer } from 'serve';
const server = createServer({ root: 'dist' });

server.listen(3001, () => {
  console.log('Serving on http://localhost:3001');
});
