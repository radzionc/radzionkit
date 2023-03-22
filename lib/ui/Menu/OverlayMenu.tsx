
import { ReactNode, useState } from "react";
import { BottomSlideOver } from "lib/ui/BottomSlideOver";
import { ResponsiveView } from "lib/ui/ResponsiveView";
import { HStack, VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import { offset, shift, useClick, useDismiss, useFloating, useInteractions } from "@floating-ui/react";

import { MenuOption, MenuOptionProps } from "./MenuOption";
import { PopoverMenu } from "./PopoverMenu";
import { PrimaryButton } from "../buttons/rect/PrimaryButton";

interface OpenerParams extends Record<string, unknown> {
  ref: (anchor: HTMLElement | null) => void;
}

interface OverlayMenuProps {
  title: ReactNode;
  options: MenuOptionProps[];
  renderOpener: (params: OpenerParams) => ReactNode;
}

export function OverlayMenu({
  options,
  renderOpener,
  title,
}: OverlayMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    placement: "bottom",
    strategy: "fixed",
    onOpenChange: setIsOpen,
    middleware: [
      offset(4),
      shift()
    ]
  });

  useDismiss(context);

  const click = useClick(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
  ]);


  return (
    <>
      {renderOpener({ ...getReferenceProps(), ref: refs.setReference, })}
      {isOpen && (
        <ResponsiveView
          small={() => (
            <BottomSlideOver onClose={() => setIsOpen(false)} title={title}>
              <VStack gap={12}>
                {options.map(({ text, icon, onSelect, kind }) => (
                  <PrimaryButton
                    style={{ justifyContent: "flex-start", height: 56 }}
                    kind={kind === "alert" ? "alert" : "secondary"}
                    size="l"
                    isRounded={true}
                    key={text}
                    onClick={() => {
                      onSelect();
                      setIsOpen(false);
                    }}
                  >
                    <HStack alignItems="center" gap={8}>
                      {icon} <Text>{text}</Text>
                    </HStack>
                  </PrimaryButton>
                ))}
              </VStack>
            </BottomSlideOver>
          )}
          normal={() => (
            <div
              ref={refs.setFloating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
              }}
              {...getFloatingProps()}
            >
              <PopoverMenu onClose={() => setIsOpen(false)} title={title}>
                {options.map(({ text, icon, onSelect, kind }) => (
                  <MenuOption
                    text={text}
                    key={text}
                    icon={icon}
                    kind={kind}
                    onSelect={() => {
                      setIsOpen(false);
                      onSelect();
                    }}
                  />
                ))}
              </PopoverMenu>
            </div>
          )}
        />
      )}
    </>
  );
}
