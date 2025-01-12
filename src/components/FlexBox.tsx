'use client';
import { colors } from '../../styles.stylex';
import * as stylex from '@stylexjs/stylex';

const FlexBoxStyles = stylex.create({
    root: {
        background: colors.bg_primary
    }
});

interface FlexBoxProps {
    children: React.ReactNode,
}

const FlexBox: React.FC<FlexBoxProps>  = ({children}) => {
    return (
        <div {...stylex.props(FlexBoxStyles.root)}>
            {children}
        </div>
    );
}

export default FlexBox;