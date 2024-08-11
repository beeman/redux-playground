export function CoreUiDebug({ data }: { data: string | object }) {
  return (
    <pre
      style={{
        fontSize: '0.8rem',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: '0.5rem',
        borderRadius: '0.5rem',
      }}
    >
      {JSON.stringify(typeof data === 'string' ? JSON.parse(data) : data, null, 2)}
    </pre>
  )
}
