import { Text, type TextProps, StyleSheet } from 'react-native';
import "../utilis/i18n";
import { useTranslation } from "react-i18next";
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | "variantHeading" | "secondary" | "textfieldlabel";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const { t } = useTranslation();

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === "variantHeading" ? styles.variantHeading : undefined,
        type === "secondary" ? styles.secondary : undefined,
        type === "textfieldlabel" ? styles.textfieldlabel : undefined,
        style,
        { fontFamily: 'DMSansRegVar' },
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    marginTop: 10,
  },
  secondary:{
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: 'rgba(199, 199, 199, 1)',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  variantHeading: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
    textAlign: 'center',
    paddingBottom: 10,
    zIndex: 1, // Ensures text is above the overlay
  },
  textfieldlabel: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: -0.4,
    color: "#fff",
    textAlign: "left",
    alignSelf: "flex-start",
    marginTop: 15,
  },
});
