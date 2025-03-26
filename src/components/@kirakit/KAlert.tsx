import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default:
          "bg-card text-card-foreground *:data-[slot=alert-description]:text-card-foreground/90",
        primary:
          "bg-primary text-primary-foreground *:data-[slot=alert-description]:text-primary-foreground/90",
        secondary:
          "bg-secondary text-secondary-foreground *:data-[slot=alert-description]:text-secondary-foreground/90",
        muted:
          "bg-muted text-muted-foreground *:data-[slot=alert-description]:text-muted-foreground/90",
        info: "bg-info text-info-foreground *:data-[slot=alert-description]:text-info-foreground/90",
        success:
          "bg-success text-success-foreground *:data-[slot=alert-description]:text-success-foreground/90",
        warning:
          "bg-warning text-warning-foreground *:data-[slot=alert-description]:text-warning-foreground/90",
        destructive:
          "bg-destructive text-destructive-foreground *:data-[slot=alert-description]:text-destructive-foreground/90",
      },
      inline: {
        true: "bg-transparent",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        inline: true,
        class:
          "border-card-foreground text-card-foreground *:data-[slot=alert-description]:text-card-foreground/90",
      },
      {
        variant: "primary",
        inline: true,
        class:
          "border-primary text-primary *:data-[slot=alert-description]:text-primary/90",
      },
      {
        variant: "secondary",
        inline: true,
        class:
          "border-secondary text-secondary *:data-[slot=alert-description]:text-secondary/90",
      },
      {
        variant: "muted",
        inline: true,
        class:
          "border-muted-foreground text-muted-foreground *:data-[slot=alert-description]:text-muted-foreground/90",
      },
      {
        variant: "info",
        inline: true,
        class:
          "border-info text-info *:data-[slot=alert-description]:text-info/90",
      },
      {
        variant: "success",
        inline: true,
        class:
          "border-success text-success *:data-[slot=alert-description]:text-success/90",
      },
      {
        variant: "warning",
        inline: true,
        class:
          "border-warning text-warning *:data-[slot=alert-description]:text-warning/90",
      },
      {
        variant: "destructive",
        inline: true,
        class:
          "border-destructive text-destructive *:data-[slot=alert-description]:text-destructive/90",
      },
    ],
    defaultVariants: {
      variant: "default",
      inline: false,
    },
  }
);

function Alert({
  className,
  variant,
  inline,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant, inline }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}
function KAlert({
  className,
  icon,
  title,
  description,
  variant,
  inline,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    icon?: IconName;
    title: string;
    description: string;
  }) {
  return (
    <Alert variant={variant} inline={inline} className={className} {...props}>
      {icon && <DynamicIcon name={icon} />}
      <AlertTitle className={cn(description ? "font-semibold" : "font-medium")}>
        {title}
      </AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}

export { KAlert };
