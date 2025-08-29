export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(err.topString())
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
