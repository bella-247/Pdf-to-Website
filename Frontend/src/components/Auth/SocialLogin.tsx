import { FaGoogle, FaGithub } from 'react-icons/fa';

type SocialLoginProps = {
  onGoogle?: () => void;
  onGithub?: () => void;
  showGithub?: boolean;
};

export default function SocialLogin({ onGoogle, onGithub, showGithub = true }: SocialLoginProps) {
  return (
    <div className="mt-6 space-y-4">
      <div className="relative flex items-center justify-center">
        <span className="h-px w-full bg-gray-200" />
        <span className="absolute bg-white px-3 text-xs text-gray-500">Or continue with</span>
      </div>
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={onGoogle}
          className="flex items-center justify-center gap-3 border rounded-xl py-3 w-full hover:bg-gray-50 transition shadow-sm font-medium"
        >
          <FaGoogle className="text-[#DB4437]" />
          <span>Continue with Google</span>
        </button>
        {showGithub ? (
          <button
            type="button"
            onClick={onGithub}
            className="flex items-center justify-center gap-3 border rounded-xl py-3 w-full hover:bg-gray-50 transition shadow-sm font-medium"
          >
            <FaGithub className="text-gray-700" />
            <span>Continue with GitHub</span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
