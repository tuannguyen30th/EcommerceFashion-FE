import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ClipboardList, LogIn, LogOut, User, UserIcon, UserPen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext'; // Adjust the path to your `AuthContext`

type Props = {
  className?: string;
};

export default function ProfileButton({ className }: Props) {
  const { user, logout, login } = useAuth();

  if (!user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={`mr-2 ${className}`}
            aria-label="User Menu"
          >
            <User className="w-6 h-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white text-primary">
          <DropdownMenuGroup>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link to="/auth/sign-in" onClick={login}>
                <LogIn className="w-4 h-4 mr-2" />
                <span>Đăng nhập</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link to="/auth/sign-up">
                <UserPen className="w-4 h-4 mr-2" />
                <span>Đăng ký</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="ml-3 cursor-pointer">
          <AvatarImage src={user.shopLogo} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white text-primary">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-bold leading-none line-clamp-1">
              {user.userName}
            </p>
            <p className="text-xs leading-none text-muted-foreground line-clamp-1">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link to="/profile">
              <UserIcon className="w-4 h-4 mr-2" />
              <span>Hồ sơ người dùng</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link to="/tracking">
              <ClipboardList className="w-4 h-4 mr-2 dark:filter dark:invert" />
              <span>Đơn hàng của bạn</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => logout()}
          className="cursor-pointer"
        >
          <LogOut className="w-4 h-4 mr-2" />
          <span>Đăng Xuất</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
