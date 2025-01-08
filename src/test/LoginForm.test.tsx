import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoginForm from '../components/auth/LoginForm';
import '@testing-library/jest-dom';

describe('LoginForm', () => {
    it('로그인 폼 렌더링', () => {
        render(<LoginForm />);
        // "로그인" 텍스트가 포함된 h2 요소를 찾음
        expect(
            screen.getByRole('heading', { name: '로그인' })
        ).toBeInTheDocument();
        // "아이디" 레이블이 화면에 있는지 확인
        expect(screen.getByLabelText('아이디')).toBeInTheDocument();
        // "비밀번호" 레이블이 화면에 있는지 확인
        expect(screen.getByLabelText('비밀번호')).toBeInTheDocument();
    });

    it('이메일, 비밀번호 입력력', () => {
        render(<LoginForm />);
        const emailInput = screen.getByLabelText('아이디');
        const passwordInput = screen.getByLabelText('비밀번호');
        const submitButton = screen.getByRole('button', { name: '로그인' });

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(submitButton);

        expect(
            screen.getByDisplayValue('test@example.com')
        ).toBeInTheDocument();
        expect(screen.getByDisplayValue('password')).toBeInTheDocument();
    });
});
