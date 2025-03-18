import { Counter as React95Counter } from "react95";
import styled from "styled-components";

const CounterWrapper = styled.div`
	width: 100%;
  display: flex;
  align-items: center;
  gap: 2px;
`;

type CustomCounterProps = {
  value: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export function CustomCounter({ value, size = 'lg' }: CustomCounterProps) {
  // Split the time string into parts by colon
  const parts = value.split(':');
  
  return (
    <CounterWrapper>
      {parts.map((part, index) => (
        <>
          <React95Counter key={`counter-${index}`} value={Number(part)} size={size} minLength={2} />
          {index < parts.length - 1 && <span style={{ color: 'transparent', fontSize: '20px' }}>:</span>}
        </>
      ))}
    </CounterWrapper>
  );
}