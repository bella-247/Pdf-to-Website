import React, { useMemo, useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

type FormField = {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
};

type AuthFormProps = {
  title?: string;
  submitLabel: string;
  fields: FormField[];
  onSubmit?: (values: Record<string, string>) => void;
  footer?: React.ReactNode;
  preCard?: React.ReactNode;
};

export default function AuthForm({ title, submitLabel, fields, onSubmit, footer, preCard }: AuthFormProps) {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    fields.forEach((f) => {
      initial[f.name] = '';
    });
    return initial;
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.(values);
  }

  const iconByField = useMemo(() => ({
    name: User,
    email: Mail,
    password: Lock,
    confirmPassword: Lock,
  } as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>), []);

  return (
    <div className="relative min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {preCard ? <div className="mb-6">{preCard}</div> : null}

        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          {title ? (
            <>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-2 text-center">{title}</h1>
              <div className="h-1 w-20 bg-gradient-to-r from-[#6C63FF] to-[#FF6584] rounded-full mx-auto mb-6" />
            </>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-5">
            {fields.map((field) => {
              const Icon = iconByField[field.name] ?? undefined;
              return (
                <div key={field.name} className="flex flex-col gap-1">
                  <label htmlFor={field.name} className="text-sm font-medium text-[#111827]">
                    {field.label}
                  </label>
                  <div className="relative">
                    {Icon ? (
                      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    ) : null}
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type ?? 'text'}
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                      value={values[field.name]}
                      onChange={handleChange}
                      required
                      className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border border-gray-200 rounded-xl bg-white placeholder-gray-400 
                        focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF] hover:border-[#6C63FF]/50 transition`}
                    />
                  </div>
                </div>
              );
            })}

            <button
              type="submit"
              className="w-full bg-[#6C63FF] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-[#5a52e6] transition focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-offset-2"
            >
              {submitLabel}
            </button>
          </form>

          {footer ? <div className="mt-6">{footer}</div> : null}
        </div>
      </div>
    </div>
  );
}
