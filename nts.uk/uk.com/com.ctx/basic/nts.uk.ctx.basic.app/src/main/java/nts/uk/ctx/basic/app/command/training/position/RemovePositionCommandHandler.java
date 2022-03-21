package nts.uk.ctx.basic.app.command.training.position;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.transaction.Transactional;

import nts.uk.ctx.basic.dom.training.position.PositionRepository;

@Stateless
@Transactional
public class RemovePositionCommandHandler {
	
	@Inject
	private PositionRepository positionRepository;
	
	
}
