import { memo } from 'preact/compat';
import { useCallback, useState } from 'preact/hooks';
import { SkillProgressionText } from '../skill-progression-text';
import { championAbilityVideo, isDef, isDefAndNotEmpty } from '../../../lib/helpers';
import { getChampionAbilityLabelAndColor } from '../../../lib/tooltips/helpers';
import {
    ChampionAbilityKeySymbolStyled,
    Content,
    AbilityMetric,
    Description,
    Title,
    VideoStyled,
    Wrapper,
    AbilityMetricValue,
} from '../../../styles/components/champion-ability-tooltip-styles';

export const ChampionSkillTooltip = ({ identifier, by = 'slug', name, description, abilityKey, range, cost, cooldown, className }) => {

    const [color, label] = abilityKey ? getChampionAbilityLabelAndColor(abilityKey) : [null, null];

    const [video, setVideo] = useState(championAbilityVideo(identifier, by));
    const style = { marginTop: isDef(video) ? undefined : '0' };
    const onVideoError = useCallback(() => setVideo(null), [setVideo]);

    return (
        <Wrapper className={className}>
            {isDef(video) && (
                <VideoStyled loop={true} autoPlay={true} muted={true} placeholder={video.placeholder} onError={onVideoError}>
                    <source src={video.webm} type="video/webm" />
                    <source src={video.mp4} type="video/mp4" />
                </VideoStyled>
            )}
            <Content style={style}>
                <Title>
                    {name}
                    {color && label && <ChampionAbilityKeySymbolStyled style={{ color }}>{label}</ChampionAbilityKeySymbolStyled>}
                </Title>
                {isDefAndNotEmpty(description) && <Description markdownText={description} />}
                {isDefAndNotEmpty(range) && (
                    <AbilityMetric>
                        <em>{'Range'}:</em>
                        &nbsp;
                        <AbilityMetricValue>{range}</AbilityMetricValue>
                    </AbilityMetric>
                )}
                {isDefAndNotEmpty(cost) && cost !== '0' && (
                    <AbilityMetric>
                        <em>{'Cost'}:</em>
                        &nbsp;
                        <SkillProgressionText text={cost} />
                    </AbilityMetric>
                )}
                {isDefAndNotEmpty(cooldown) && (
                    <AbilityMetric>
                        <em>{'Cooldown'}:</em>
                        &nbsp;
                        <SkillProgressionText text={cooldown} />
                        &nbsp;
                        <span>{'seconds'}</span>
                    </AbilityMetric>
                )}
            </Content>
        </Wrapper>
    );
};

export default memo(ChampionSkillTooltip);